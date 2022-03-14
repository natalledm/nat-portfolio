export default function NetworkInfo(socialNetwork) {

  const { icon, url } = socialNetwork;

  const iconPlace = `icons/${icon}`;

  return (
    <div className='network-container'>
      <a href={url} target="_blank " rel="noreferrer">
        <img src={iconPlace} alt="" className='network-icon' />
      </a>
    </div>
  )
}