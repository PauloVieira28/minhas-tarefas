import * as S from './styles'

export type Props = {
  ativo?: boolean
}

const CardFilter = (props: Props) => (
  <S.Card ativo={props.ativo}>
    <S.Counter>3</S.Counter>
    <S.Label>pendentes</S.Label>
  </S.Card>
)

export default CardFilter
