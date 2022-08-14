/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Box, Container } from 'theme-ui';
import SectionHeading from 'components/section-heading';
import Feature from 'components/cards/feature';

import individual from 'assets/images/icons/individual.png';
import team from 'assets/images/icons/team.png';
import org from 'assets/images/icons/org.png';

const data = [
  {
    id: 1,
    icon: individual,
    title: 'Develop your idea ',
    description: `We will have a discussion with you and help you see the hidden aspects of your business – partners, customers, influencers, business models etc – which you will never be able to see or realize `,
  },
  {
    id: 2,
    icon: team,
    title: 'Build your Strategy ',
    description: `Based on our interaction, you canuse the platform to build strategies and goals related to those strategies.  `,
  },
  {
    id: 3,
    icon: org,
    title: 'Achieve your goals ',
    description: `We will work with you to track and close the goals and help out if you are stuck somewhere. We will guide you with the best practices for marketing, sales, team building legal and admin at every step of the way. `,
  },
];
const data2 = [
  {
    id: 1,
    icon: team,
    title: 'Rate your startup ',
    description: `Based on your performance against the set goals, you will receive points which you can showcase to potential investors `,
  },
  {
    id: 2,
    icon: individual,
    title: 'Access our network ',
    description: `We have a built a good network of prospective leads from big brands who are also a part of our community. They can be useful partners and even customers for your startup. We also have a 2000+ strong community which you can leverage.  `,
  },
  {
    id: 3 ,
    icon: org,
    title: 'Achieve your goals ',
    description:`We will work with you to position your startup with the top accelerators of the country. Your performance and rating will act as a catalyst. `
  },
];

const Services = () => {
  return (
    <Box as="section" id="services" variant="section.features">
      <Container>
        <SectionHeading
          sx={styles.heading}
          title="Successful business start with great feature"
          description="Build an incredible workplace and grow your business with Startic Field’s all-in-one platform with . . . ."
        />
        <Box sx={styles.features}>
          {data?.map((item) => (
            <Feature key={item.id} className="feature-item" data={item} />
          ))}
        </Box>
        <Box sx={styles.features}>
          {data2?.map((item) => (
              <Feature key={item.id} className="feature-item" data={item} />
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default Services;

const styles = {
  heading: {
    marginBottom: [40, 50, 60, 80],
    maxWidth: ['none', null, null, 565, null, 'none'],
    h2: {
      color: 'heading',
      fontSize: ['28px', '32px', '32px', '32px', '32px', '32px', '40px'],
    },
    P: {
      fontSize: ['16px', '16px', '16px', '16px', '14px', '16px'],
      maxWidth: [510],
      m: ['5px auto 0'],
    },
  },
  features: {
    gap: [30, 30, 60, 40, 30, 60],
    marginBottom: [40, 50, 70, 90],
    display: ['grid', 'grid'],
    gridTemplateColumns: [
      'repeat(1, 1fr)',
      'repeat(1, 1fr)',
      'repeat(1, 1fr)',
      'repeat(2, 1fr)',
      'repeat(3, 1fr)',
    ],
    '.feature-item': {
      display: ['block', 'block', 'flex', 'flex', 'block', 'flex'],
      textAlign: ['center', 'center', 'left', 'left', 'center', 'left'],
      maxWidth: [290, 260, 'none'],
      m: ['0 auto', '0 auto', 0],
      figure: {
        m: [
          '0 0 15px',
          '0 0 15px',
          '0 30px 0 0',
          '0 30px 0 0',
          '0 0 15px',
          '0 30px 0 0',
        ],
      },
      h4: {
        fontWeight: [700],
        mb: ['15px', '15px', '20px', '15px'],
      },
      p: {
        fontSize: ['14px', '14px', '16px', '16px', '14px', '16px'],
      },
    },
  },
};
