import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import axios from 'axios'

import Home from "../Pages/Home"
import Issue from "../Pages/Issues"

import { dataRepo } from './datas'

jest.mock("axios", () => {
    const mAxiosInstance = { get: jest.fn() };
    return {
        create: jest.fn(() => mAxiosInstance),
    };
})

const mockAxios = axios.create()

describe("Home", () => {
    afterAll(() => {
        jest.resetAllMocks();
    });

    it("test in axios requests api in home", async () => {
        mockAxios.get.mockResolvedValueOnce({ data: dataRepo });
        render(<Home />)

        const inputElement = screen.getByPlaceholderText('pesquise aqui')
        const btn = screen.getByText('seach')

        userEvent.type(inputElement, 'value')
        userEvent.click(btn)

        const cardList = screen.findAllByTestId('row')

        expect(await cardList).toHaveLength(dataRepo.items.length)
    })
})

describe("Issue", () => {
    afterAll(() => {
        jest.resetAllMocks();
    });

    it("test in axios requests api in issue", async () => {
        mockAxios.get.mockResolvedValueOnce({ data: dataRepo });
        render(<Issue />)
        const cardList = screen.findAllByTestId('row')

        expect(await cardList).toHaveLength(dataRepo.items.length)
    })
})