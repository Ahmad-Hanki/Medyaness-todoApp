"use client";

import { useFormStatus } from "react-dom";
import { Button } from "./ui/button";

const SubmitButton = () => {
  const { pending } = useFormStatus();
  let content;
  if (pending) {
    content = (
      <Button
        className=" text-white p-2 rounded-md"
        disabled
      >
        Submitting...
      </Button>
    );
  } else content = <Button type="submit">Submit</Button>;
  return content;
};

export default SubmitButton;
