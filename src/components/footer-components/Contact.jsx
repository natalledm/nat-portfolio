export default function Contact(contact) {

  const { icon, info } = contact;

  const iconFile = `icons/${icon}`;

  return(
    <div className='contact-container'>
      <img src={iconFile} alt="" className='contact-icon'/>
      <p className='contact-info'>{info}</p>
    </div>
  );
};