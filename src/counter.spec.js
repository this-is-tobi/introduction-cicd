import { expect } from 'vitest'
import { moinsUn, plusUn } from './counter.js'

describe('Compteur', () => {
  it('Le nombre passé en paramètre doit augmenter de 1.', async () => {
    const nombre = plusUn(0)
    expect(nombre).toEqual(1)
  })

  it('Le nombre passé en paramètre doit diminuer de 1.', async () => {
    const nombre = moinsUn(10)
    expect(nombre).toEqual(9)
  })
})
