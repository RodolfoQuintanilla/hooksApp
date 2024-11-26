import { useEffect } from "react";

const Message = () => {
    useEffect(() => {

        const onMouseMov = ({ x, y }) => {
            const coords = { x, y }
            console.log(coords);

        }
        window.addEventListener('mousemove', onMouseMov)

        return () => {
            window.removeEventListener('mousemove', onMouseMov)
        }

    }, []);

    return (
        <div>
            <h1>Usuario ya existe</h1>

        </div>
    );
};

export default Message;