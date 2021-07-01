function Welcome(props) {
    return <p>Hello, {props.name}</p>;
}

const welcomeComponent = <Welcome name="Lukas" />;
ReactDOM.render(
    welcomeComponent,
    document.getElementById('reactComponent')
);