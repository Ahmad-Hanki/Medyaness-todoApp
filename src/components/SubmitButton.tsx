'use client'

import { useFormStatus } from "react-dom"
import { Button } from "./ui/button";

const SubmitButton = () => {
    const {pending} = useFormStatus();
    if (pending) {
        return (
            <Button
            className="bg-primary-foreground text-white p-2 rounded-md"
            disabled
            >
                Submitting...
            </Button>
        )
    }
    
  return (
    <Button type="submit">
        Submit
    </Button>

  )
}

export default SubmitButton