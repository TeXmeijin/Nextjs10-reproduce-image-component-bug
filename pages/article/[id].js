import Image from 'next/image'
import Link from 'next/link'

const testMasterArticles = [
    {
        id: `1`,
        title: 'article 1',
        imageUrl: 'https://placehold.jp/150x150.png'
    },
    {
        id: `2`,
        title: 'article 2',
        imageUrl: 'http://placehold.jp/24/cc9999/993333/150x150.png'
    },
]

export const getStaticProps = (context) => {
    const {id} = context.params

    return {
        props: {
            article: testMasterArticles.find(article => article.id === id)
        }
    }
}

export const getStaticPaths = () => {
    return {
      paths: testMasterArticles.map(article => {
        return {
          params: {
            id: article.id
          }
        }
      }),
      fallback: true,
    }
  }

const ArticleDetail = ({article}) => {
    return (
        <main>
            <h1>{article.title}</h1>
            <Image src={article.imageUrl} width={150} height={150} alt='test'></Image>
            <hr></hr>
            <Image key={article.imageUrl} src={article.imageUrl} width={150} height={150} alt='test ok'></Image>
            <hr></hr>
            <Link href="/article/1" passHref>
                <a>
                    article id: 1
                </a>
            </Link>
            <Link href="/article/2" passHref>
                <a>
                    article id: 2
                </a>
            </Link>
        </main>
    )
}

export default ArticleDetail