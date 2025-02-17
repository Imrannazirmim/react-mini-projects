import {
  FaFacebook,
  FaLinkedin,
  FaTwitter,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";

const Contact = () => {
  return (
    <div>
      <div className=" bg-gray-600 text-white w-[40rem] flex justify-between gap-3 px-5 py-4 rounded-lg mx-auto">
        <label htmlFor="whatsapp">
          <FaWhatsapp size={38} />
        </label>
        <label htmlFor="whatsapp">
          <FaFacebook size={38} />
        </label>
        <label htmlFor="whatsapp">
          <FaTwitter size={38} />
        </label>
        <label htmlFor="whatsapp">
          <FaYoutube size={38} />
        </label>
        <label htmlFor="whatsapp">
          <FaLinkedin size={38} />
        </label>
      </div>
    </div>
  );
};
export default Contact;
