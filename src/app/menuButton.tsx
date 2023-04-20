import styles from './page.module.css'

interface Props {
	name: string;
}

export default function MenuButton({ name }: Props) {

	return (
		<button>
			{name}
		</button>
	);
}