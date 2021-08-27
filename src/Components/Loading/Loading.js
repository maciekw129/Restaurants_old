import styled from 'styled-components';

const LoadingAnimation = styled.div`
    display: flex;
    justify-content: space-evenly;
    width: 100%;
    margin: 1.75rem 0;

    @keyframes loading {
        from {
            opacity: 100%;
        }

        to {
            opacity: 0%;
        }
    }

    & div {
        content: '';
        margin: 0 1rem;
        height: 10px;
        width: 10px;
        background-color: black;
        border-radius: 50%;
    }

    & .one {
        animation: 1s infinite alternate loading;
    }

    & .two {
        animation: 1s infinite alternate loading;
        animation-delay: 0.5s;
    }

    & .three {
        animation: 1s infinite alternate loading;
        animation-delay: 1s;
    }

`

function Loading() {
    return(
        <div>
            <LoadingAnimation>
                <div className="one"></div>
                <div className="two"></div>
                <div className="three"></div>
            </LoadingAnimation>
        </div>
    )
}

export default Loading;