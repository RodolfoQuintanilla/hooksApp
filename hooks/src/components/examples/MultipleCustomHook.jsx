import useCounter from "../../hooks/useCounter";
import useFech from "../../hooks/useFech";
import LoadingMessage from "./LoadingMessage";
import PokemonCard from "./PokemonCard";


const MultipleCustomHook = () => {

    const { counter, decrementar, incrementar } = useCounter(1)

    const { data, isLoading, hasError } = useFech(`https://pokeapi.co/api/v2/pokemon/${counter}`);



    return (
        <div>
            <h1>MultipleCustomHook</h1>
            <hr />
            {/*  <pre>{JSON.stringify(data, null, 2)}</pre> */}

            {
                isLoading ?
                    <LoadingMessage />
                    : (
                        <PokemonCard
                            id={counter}
                            name={data.name}
                            sprites={[
                                data.sprites.front_default,
                                data.sprites.back_default,
                                data.sprites.front_shiny,
                                data.sprites.back_shiny
                            ]}
                        />
                    )
            }




            <button onClick={() => counter > 1 ? decrementar() : null} className="btn btn-primary mt-2">
                Aterior
            </button>
            <button onClick={() => incrementar()} className="btn btn-primary mt-2">
                Siguiente
            </button>

        </div>
    );
};

export default MultipleCustomHook;