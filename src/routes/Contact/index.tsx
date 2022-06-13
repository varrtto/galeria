const Contact = () => {
    return (
        <div className="container is-fluid is-flex is-justify-content-left is-align-items-left is-flex-direction-column mt-3">
            <p className="mb-3 mt-6">Telefono: +0123456789</p>
            <p className="mb-3">Email: <a href="mailto:galeria@email.com">galeria@email.com</a></p>
            <p className="mb-3">Direccion: Avenida San Martin 404</p>
            <p className="mb-3">Whatsapp: <a href="https://api.whatsapp.com/send?phone=0123456789">Envíanos un mensaje de WhatsApp</a></p>
        </div>
    )
}

export default Contact