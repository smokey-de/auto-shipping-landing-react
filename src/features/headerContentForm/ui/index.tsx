import classes from './index.module.scss';
import {
  Autocomplete,
  Button,
  Checkbox,
  Flex, Input, NumberInput,
  Select,
  TextInput,
} from '@mantine/core';
import { CalendarSvg, CarSvg, EmailSvg, FromSvg, PhoneFormSvg, ToSvg } from '@/shared/helpers/svg';
import { useForm, UseFormReturnType } from '@mantine/form';
import { sendEmail } from '@/shared/helpers/api';
import { useEffect, useState } from 'react';
import { useDebouncedCallback } from '@mantine/hooks';
import { Case, Switch } from 'react-if';
import dayjs from 'dayjs';
import { IMaskInput } from 'react-imask';

const initialValues = {
  from: '',
  to: '',
  vehicle_size: '',
  from_email: '',
  terms_of_service: false,
  vehicle_year: '',
  vehicle_make: '',
  vehicle_model: '',
  pick_up_date: '',
  phone_number: '',
};

type FormValues = typeof initialValues

const checkValidLength = (value: string) => value.length > 0 ? null : 'This field is required';

export const HeaderContentForm = () => {
  const [step, setStep] = useState(1);

  const form = useForm<FormValues>({
    mode: 'uncontrolled',
    initialValues,

    validate: {
      terms_of_service: (value) =>
        value ? null : 'If you would like to continue, Please agree to our terms in the above!\n',
      from_email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
      from: checkValidLength,
      to: checkValidLength,
      vehicle_size: checkValidLength,
      vehicle_year: checkValidLength,
      vehicle_make: checkValidLength,
      vehicle_model: checkValidLength,
      pick_up_date: checkValidLength,
    },
  });

  const handleSubmit = (values: FormValues) => {
    sendEmail(values, (type) => {
      if (type === 'success') {
        form.reset();
        setStep(1);
      }
    });
  };


  return (
    <div className={classes.formWrapper}>
      <h2 className={classes.formTitle}>
        GET A FREE INSTANT QUOTE or CALL NOW
        <br />
        <div className={'flex items-center gap-3'}>
          <a href="tel: +1(917) 627-5498">(917) 627-5498</a>
          <a href="tel: +1(865) 776-9121">(865) 776-9121</a>
        </div>
      </h2>
      <hr className={classes.formTitleHr} />

      <Flex
        direction={'column' as React.CSSProperties['flexDirection']}
        gap={'1rem'}
      >

        <Switch>
          <Case condition={step === 1}>
            <FirstStep form={form} />
          </Case>
          <Case condition={step === 2}>
            <SecondStep form={form} />
          </Case>
          <Case condition={step === 3}>
            <LastStep form={form} />
          </Case>
        </Switch>

        <Checkbox
          label="By submitting this form you agree to receive SMS messages from our company."
          key={form.key('terms_of_service')}
          {...form.getInputProps('terms_of_service', { type: 'checkbox' })}
        />

        <Button fullWidth className={classes.formBtn} onClick={() => {
          const validateAndSetErrors = (fields: (keyof FormValues)[]) => {
            const errors = fields.reduce((acc, field) => {
              const validation = form.validateField(field);
              if (validation.error !== null) {
                acc[field] = typeof validation.error === 'string' ? validation.error : String(validation.error);
              }
              return acc;
            }, {} as Record<keyof FormValues, string | null>);

            if (Object.keys(errors).length === 0) {
              setStep(step === 3 ? step : step + 1);
            } else {
              form.setErrors(errors);
            }
            return errors;
          };

          if (step === 1) {
            validateAndSetErrors(['from', 'to', 'vehicle_size', 'terms_of_service']);
          } else if (step === 2) {
            validateAndSetErrors(['vehicle_year', 'vehicle_make', 'vehicle_model', 'terms_of_service']);
          } else if (step === 3) {
            const errors = validateAndSetErrors(['from_email', 'pick_up_date', 'terms_of_service']);
            if (Object.keys(errors).length === 0) {
              handleSubmit(form.getValues());
            }
          }
        }}>
          {step === 3 ? 'Submit' : 'Continue'}
        </Button>
      </Flex>
    </div>
  );
};


function getSearchResults(query: string): Promise<string[]> {
  return fetch(`https://back.usstartruckingllc.com/api/shipping/zip-codes/?search=${query}`).then((res) =>
    res.json().then((data) => data.results.map((item: {
      city: string;
      state: string;
      name: string;
    }) => `${item.city}, ${item.state}, ${item.name}`)),
  );
}

const FirstStep = ({ form }: { form: UseFormReturnType<FormValues, any> }) => {
  const [autoCompleteDataFrom, setAutoCompleteDataFrom] = useState<string[]>([]);
  const [autoCompleteDataTo, setAutoCompleteDataTo] = useState<string[]>([]);
  const handleChange = (formKey: keyof FormValues, value: string) => {
    form.setFieldValue(formKey, value, {
      forceUpdate: false,
    });
    handleSearch(value, formKey);
  };

  useEffect(() => {
    handleSearchFetching('', 'from');
    handleSearchFetching('', 'to');
  }, []);

  const handleSearch = useDebouncedCallback(async (query: string, formKey: keyof FormValues) => {
    await handleSearchFetching(query, formKey);
  }, 500);

  const handleSearchFetching = async (query: string, formKey: keyof FormValues) => {
    if (formKey === 'from') {
      const data = await getSearchResults(query);
      setAutoCompleteDataFrom(data);
    } else {
      const data = await getSearchResults(query);
      setAutoCompleteDataTo(data);
    }
  };

  return (
    <>
      <Autocomplete
        leftSectionPointerEvents="none"
        leftSection={<FromSvg />}
        size="lg"
        placeholder="From (Zip code or City)"
        data={autoCompleteDataFrom}
        variant="filled"
        radius="md"
        key={form.key('from')}
        {...form.getInputProps('from')}
        onChange={(value) => handleChange('from', value)}
      />

      <Autocomplete
        leftSectionPointerEvents="none"
        leftSection={<ToSvg />}
        size="lg"
        placeholder="To (Zip code or City)"
        data={autoCompleteDataTo}
        variant="filled"
        radius="md"
        key={form.key('to')}
        {...form.getInputProps('to')}
        onChange={(value) => handleChange('to', value)}
      />

      <Select
        leftSectionPointerEvents="none"
        leftSection={<CarSvg />}
        size="lg"
        searchable
        placeholder="Vehicle size"
        checkIconPosition="right"
        data={['Car', 'SUV', 'Pickup', 'Motorcycle']}
        variant="filled"
        radius="md"
        key={form.key('vehicle_size')}
        {...form.getInputProps('vehicle_size')}
      />

    </>
  );
};

const SecondStep = ({ form }: { form: UseFormReturnType<FormValues, any> }) => {

  return (
    <>
      <Select
        leftSectionPointerEvents="none"
        leftSection={<CalendarSvg />}
        size="lg"
        searchable
        placeholder="Vehicle year"
        checkIconPosition="right"
        data={Array.from({ length: 50 }, (_, i) => String(dayjs().year() - i))}
        variant="filled"
        radius="md"
        key={form.key('vehicle_year')}
        {...form.getInputProps('vehicle_year')}
      />

      <TextInput
        leftSectionPointerEvents="none"
        leftSection={<CarSvg />}
        radius="md"
        variant="filled"
        size="lg"
        withAsterisk
        placeholder="Vehicle make"
        key={form.key('vehicle_make')}
        {...form.getInputProps('vehicle_make')}
      />

      <TextInput
        leftSectionPointerEvents="none"
        leftSection={<CarSvg />}
        radius="md"
        variant="filled"
        size="lg"
        withAsterisk
        placeholder="Vehicle model"
        key={form.key('vehicle_model')}
        {...form.getInputProps('vehicle_model')}
      />
    </>
  );
};

const LastStep = ({ form }: { form: UseFormReturnType<FormValues, any> }) => {
  return (
    <>
      <TextInput
        leftSectionPointerEvents="none"
        leftSection={<EmailSvg />}
        radius="md"
        variant="filled"
        size="lg"
        withAsterisk
        placeholder="example@email.com"
        key={form.key('from_email')}
        {...form.getInputProps('from_email')}
      />

      <Select
        leftSectionPointerEvents="none"
        leftSection={<CarSvg />}
        size="lg"
        searchable
        placeholder="Pick up date"
        checkIconPosition="right"
        data={[
          'As soon as possible',
          'Within 7 days',
          'Within 2 weeks',
          'On a specific date',
          'On a specific date ',
        ]} variant="filled"
        radius="md"
        key={form.key('pick_up_date')}
        {...form.getInputProps('pick_up_date')}
      />

      <Input
        component={IMaskInput} mask="(000) 000-0000"
        leftSectionPointerEvents="none"
        leftSection={<PhoneFormSvg />}
        variant="filled"
        size="lg"
        radius="md"
        placeholder={'(000) 000-0000'}
        key={form.key('phone_number')}
        {...form.getInputProps('phone_number')} />
    </>
  );
};