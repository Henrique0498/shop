import * as S from './styles'

interface HeadingProps {
  title: string
  options: React.ReactNode
}

const Heading = ({ title, options }: HeadingProps) => {
  return (
    <S.Container>
      <p className="text-sm font-semibold capitalize">
        <span className="text-white">Home</span>
        {` / ${title}`}
      </p>
      <h1 className="text-3xl font-bold">{title}</h1>
      <div>{options}</div>
    </S.Container>
  )
}

export default Heading
