import { render, screen } from '@testing-library/react'
import If from '.'

it('should render child when `is` true, the opposite when `is` false', () => {
    const { loading, error } = { loading: true, error: false }

    render(
        <>
            <If is={loading}>Loading..</If>
            <If is={error}>Error</If>
        </>,
    )

    const loadingMsg = screen.getByText(/loading/i)
    expect(loadingMsg).toBeInTheDocument()

    const errorMsg = screen.queryByText(/error/i)
    expect(errorMsg).not.toBeInTheDocument()
})
