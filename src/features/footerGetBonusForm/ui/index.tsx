import { Button, TextInput } from "@mantine/core";
import { useForm } from "@mantine/form";
import { sendEmail } from "@/shared/helpers/api";
import { BONUS_TEMPLATE_ID } from "@/shared/helpers/constant";

export const FooterGetBonusForm = () => {
  const form = useForm({
    mode: "uncontrolled",
    initialValues: {
      from_email: "",
    },

    validate: {
      from_email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
    },
  });

  const handleSubmit = (values: { from_email: string }) => {
    sendEmail({ template_id: BONUS_TEMPLATE_ID, ...values }, (type) => {
      if (type === "success") form.reset();
    });
  };

  return (
    <form
      onSubmit={form.onSubmit((values) => {
        handleSubmit(values);
      })}
    >
      <div className={"mt-2 mb-3"}>
        <TextInput
          size="lg"
          radius="md"
          placeholder="Your email"
          key={form.key("from_email")}
          {...form.getInputProps("from_email", { type: "input" })}
        />
      </div>
      <Button variant="filled" radius="md" type={"submit"}>
        Submit
      </Button>
    </form>
  );
};
