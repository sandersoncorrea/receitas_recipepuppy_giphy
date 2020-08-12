function soma(a, b) {
    return a + b
}

test('Tem que retornar 8', () => {
    const retorno = soma(6, 2)

    expect(retorno).toBe(8)
})
