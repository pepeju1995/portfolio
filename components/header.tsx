import MyButton from './MyButton'

const buttons = [{
  label: 'About me',
  url: 'about'
}, {
  label: 'Expertises',
  url: 'expertises'
}, {
  label: 'Projects',
  url: 'projects'
}]

const renderMenu = () => {
  return buttons.map((button, index) => {
    return (
      <MyButton key={index} name={button.label} url={button.url} />
    )
  })
}

export default function Header () {
  return (
    <header>
      icon
      <nav>
        <ul className='mainMenu'>
          {renderMenu()}
        </ul>
      </nav>
    </header>
  )
}
