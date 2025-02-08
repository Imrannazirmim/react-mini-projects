import {createPortal} from 'react-dom'

const Popup = ({copied}) => {
  return createPortal( <section>
    {copied && <h2>Copy the clipboard</h2>}
  </section>,
  document.querySelector('#popup')
  
)
};

export default Popup;
