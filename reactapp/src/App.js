import './App.css';
import { Perfil, Bio, LinkLinkedin } from './perfil';

function App() {
	return (
		<div className='container'>
			<Perfil meunome='Henrique Junqueira' imgperfil='./perfil.jpg' />
			<br />
			<Bio />
			<br />
			<br />
			<LinkLinkedin />
		</div>
	);
}

export default App;
