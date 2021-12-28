import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="Univercity">
    <Container>
      <Title>
        Univercity <Badge>2020</Badge>
      </Title>

      <P>Univercity website is the basic code of for learning the lang.</P>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://abhishekkuntare.github.io/University/">
            https://abhishekkuntare.github.io/University/
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Windows</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>HTML, CSS ,JS</span>
        </ListItem>
      </List>

      <WorkImage src="/images/works/univercity.png" alt="univercity" />
    </Container>
  </Layout>
)

export default Work
