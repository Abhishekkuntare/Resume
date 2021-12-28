import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="Weather">
    <Container>
      <Title>
        Weather <Badge>2021</Badge>
      </Title>
      <P>
        Weather Forecast including feels like temperature, wind gust and chance
        of rain or just search and get details
      </P>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://abhishekkuntare.github.io/Whether/">
            https://abhishekkuntare.github.io/Whether/
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Windows/macOS/iOS</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>HTML, CSS , JavaScript</span>
        </ListItem>
      </List>

      <WorkImage src="/images/works/weather.png" alt="weather" />
    </Container>
  </Layout>
)

export default Work
