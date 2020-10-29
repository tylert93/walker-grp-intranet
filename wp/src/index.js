const { render } = wp.element;

// import App from '../src/components/app';

const placeElement = document.getElementById(`wg-intranet-react`);

// const WPApp = () => ( <App /> );

const WPApp = () => {
    return (
        <div>
            Beans
        </div>
    );
};

if ( placeElement ) {
    render( 
        <WPApp />, 
        placeElement
    );
}
