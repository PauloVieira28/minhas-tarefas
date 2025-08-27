import * as S from './styles'

export type Props = {
  ativo?: boolean
  counter: number
  caption: string
}

const CardFilter = ({ ativo, counter, caption }: Props) => (
  <S.Card ativo={ativo}>
    <S.Counter>{counter}</S.Counter>
    <S.Label>{caption}</S.Label>
  </S.Card>
)

export default CardFilter
