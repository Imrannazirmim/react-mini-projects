import { useFormStatus } from "react-dom";

const FormButton = () => {
    const {pending, } = useFormStatus()
    console.log(pending);
    
  return <div>
    <button type="submit" disabled={pending}>
    {pending ? 'Submiting...': 'Submit'}
    </button>
  </div>;
};


export default FormButton;
