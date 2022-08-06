import { render, screen } from '@testing-library/react'
import Loop from '.'

it('should iterate component given `times`', () => {
    render(
        <Loop times={7}>
            <h1>Title</h1>
        </Loop>,
    )

    const allHeadings = screen.getAllByRole('heading', {
        level: 1,
    })

    expect(allHeadings).not.toHaveLength(6)
    expect(allHeadings).toHaveLength(7)
})
