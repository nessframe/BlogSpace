import { usePagination } from "../../../hooks/usePagination"
import MyButton from "../button/MyButton"

function Pagination({totalPages, page, setPage}) {
    const pagesArray = usePagination(totalPages)
    return(
        <div style={{marginBottom: '20px'}}>
                {pagesArray.map((n) => (
                <MyButton
                    onClick={() => {setPage(n)}}
                    style={n === page ? {background: 'blueviolet', color: 'white'} : {}}
                    key={n}
                >
                    {n}
                </MyButton>
                ))}
        </div>
    )
}

export default Pagination