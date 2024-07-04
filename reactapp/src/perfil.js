function Perfil(props) {
	const tituloPagina = <h1>Olá, meu nome é {props.meunome}!</h1>;
	const minhaTagFoto = (
		<img
			src={props.imgperfil}
			className='rounded-circle w-50 justify-content-center'
		/>
	);

	const perfilContent = (
		<div className='container'>
			<div className='row'>
				<div className='col-md-2'></div>
				<div className='col-md-8'>
					{/* <div className='nome'>{tituloPagina}</div> */}
					{tituloPagina}
				</div>
				<div className='col-md-2'></div>
			</div>
			<div className='row'>
				<div className='col-md-4'></div>
				<div className='col-md-4'>
					{/* <div>{minhaTagFoto}</div> */}
					{minhaTagFoto}
				</div>
				<div className='col-md-4'></div>
			</div>
		</div>
	);

	return perfilContent;
}

function Bio() {
	const minibio = (
		<div className='minibio'>
			<div className='container'>
				<div className='row'>
					<div className='col-md-2'></div>
					<div className='col-md-8'>
						Henrique Junqueira, Analista de Sistema,
						Desensenvolvedor Java, Desenvolvedor Web Full Stack JS,
						TS, Reactjs, Nodejs, PHP, HTML5, CSS3, Bootstrap. Além
						de outras tecnologias.
					</div>
					<div className='col-md-2'></div>
				</div>
			</div>
		</div>
	);

	return minibio;
}

function LinkLinkedin() {
	return (
		<div className='container'>
			<div className='row'>
				<div className='col-md-4'></div>
				<div className='col-md-4 d-grid'>
					<a
						href='https://www.linkedin.com/in/henrique-abreu-junqueira/'
						className='btn btn-primary'
					>
						Linkedin
					</a>
				</div>
				<div className='col-md-4'></div>
			</div>
		</div>
	);
}

export { Perfil, Bio, LinkLinkedin };
