

const ShowIncrement = ({ increment }) => {

    console.log("Me volvi a generar :(");
    

    return (
        <button
            className="btn btn-primary"
            onClick={() => { 
                increment(5) 
            }}
        >
            INCRTEMENT
        </button>
    );
};

export default ShowIncrement;