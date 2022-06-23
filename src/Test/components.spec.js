import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import List from "../Components/List"
import Seach from "../Components/Seach"
import ListIssue from "../Components/ListIssue"
import Pagination from '../Components/Pagination'

import { dataRepo } from "./datas"

describe("seach", () => {
    it('seach button form ', () => {
        const mocks = { placeholder: "pesquise", value: "test", setValues: jest.fn(), handleChange: jest.fn() }
        render(<Seach
            placeholder={mocks.placeholder}
            value={mocks.value}
            setValues={mocks.setValues}
            handleChange={mocks.handleChange}
        />)
        const inputElement = screen.getByPlaceholderText(mocks.placeholder)
        const btn = screen.getByText('seach')
        userEvent.type(inputElement, 'value')
        userEvent.click(btn)
        expect(mocks.handleChange).toHaveBeenCalled()
    })
})

describe("list", () => {
    it('list in loop', () => {
        let loop = dataRepo.items.length
        const { container } = render(<List data={dataRepo} />)
        const cardList = container.getElementsByClassName('row')
        expect(cardList).toHaveLength(loop)
    })
})

describe("list Issue", () => {
    it('list issue in loop', () => {
        let loop = dataRepo.items.length
        const { container } = render(<ListIssue data={dataRepo} />)
        const cardList = container.getElementsByClassName('row')
        expect(cardList).toHaveLength(loop)
    })
})

describe("Pagination", () => {
    const mocks = { limit: 3, total: 9, offSet: 1, setOffSet: jest.fn() }
    it('pagination amount in loop ', () => {
        const { container } = render(<Pagination
            limit={mocks.limit}
            total={mocks.total}
            offSet={mocks.offSet}
            setOffSet={mocks.setOffSet}
        />)
        let pagination = container.getElementsByTagName("li")
        expect(pagination).toHaveLength(3)
    })
})