import { useRef, useState } from "react";
import emailjs from "emailjs-com";
import { Data } from "helpers/types";
import { Input, Textarea } from "components/Elements/FormElements";
import { PrimaryButton } from "components/Elements/Button";
import { ContactFormWrapper } from "./styles";

const ContactSection = ({ secrets }: Data) => {
  const form = useRef<HTMLFormElement>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleSubmit = (event: React.ChangeEvent<HTMLFormElement>) => {
    setIsLoading(true);
    event.preventDefault();
    emailjs
      .sendForm(
        secrets.service_id,
        secrets.template_id,
        form.current as HTMLFormElement,
        secrets.user_id
      )
      .then(
        (result) => {
          if (result.status === 200) {
            setIsLoading(false);
            event.target.reset();
          }
          console.log("result", result);
        },
        (error) => {
          setIsLoading(false);
          console.log("error", error);
        }
      );
  };

  return (
    <ContactFormWrapper>
      <form ref={form} onSubmit={handleSubmit} autoComplete="off">
        <Input label="Name" name="name" placeholder="What's your name?" />
        <Input
          label="Email"
          name="email"
          placeholder="What's your email address?"
        />
        <Textarea
          label="Message"
          name="subject"
          placeholder="What's your message?"
        />
        <PrimaryButton text="Submit" loading={isLoading} />
      </form>
    </ContactFormWrapper>
  );
};

export default ContactSection;
