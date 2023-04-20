import styles from './page.module.css'
import MenuButton from "./menuButton";

const buttonsNames = ['About me', 'Expertises', 'Projects']

const renderMenu = () => {
	return buttonsNames.map((buttonName, index) => renderMenuElement(buttonName, index))
}

const renderMenuElement = (buttonName : string, index: number) => {
	return (
		<li key={index} className='hover:bg-emerald-500 text-center'>
			<MenuButton name={buttonName} />
		</li>
	)
}

export default function Header() {
	return (
		<header className='bg-emerald-300'>
			<nav className='container'>
				<ul className='grid md:grid-cols-3 sm:grid-cols-1'>
					{ renderMenu() }
				</ul>
			</nav>
		</header>
	);
}