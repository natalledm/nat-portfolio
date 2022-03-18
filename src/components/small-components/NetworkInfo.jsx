export default function NetworkInfo(socialNetwork) {

  const { icon, url, alt } = socialNetwork;

  const iconPlace = `icons/${icon}`;

  return (
    <div className='network-container'>
      <a href={url} target="_blank " rel="noreferrer" aria-label={alt}>
        <img src={iconPlace} alt={alt} className='network-icon' />
      </a>
    </div>
  )
}