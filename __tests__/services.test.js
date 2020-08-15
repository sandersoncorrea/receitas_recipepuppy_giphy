require('dotenv').config()
import getReceitas from '../src/services/RecipePuppey'
import getGif from '../src/services/Giphy'

test('Deve ter a propriedade title', async () => {
    const data = await getReceitas('bacon')
    expect(data.hasOwnProperty('title')).toBe(true)
})

test('Deve retornar o title preenchido como Recipe Puppy', async () => {
    const data = await getReceitas('bacon')
    expect(data.title).toBe('Recipe Puppy')
})

test('Deve ter a propriedade Results', async () => {
    const data = await getReceitas('bacon')
    expect(data.hasOwnProperty('results')).toBe(true)
})

test('Deve ter o campo Results no objeto', async () => {
    const data = await getReceitas('bacon')
    expect(typeof data.results).toBe('object')
})

test('Deve ter a propriedade data', async () => {
    const result = await getGif('bacon')
    expect(result.hasOwnProperty('data')).toBe(true)
})

test('Deve ter o campo data no objeto', async () => {
    const result = await getGif('bacon')
    expect(typeof result.data).toBe('object')
})
