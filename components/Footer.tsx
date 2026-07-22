import {
  Box,
  Container,
  Link,
  SimpleGrid,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react'
import { ReactNode } from 'react'
import NextLink from 'next/link'
import Image from 'next/image'
import {
  FaEnvelope,
  FaFacebook,
  FaLinkedin,
  FaPhone,
  FaYoutube,
} from 'react-icons/fa'

const ListHeader = ({ children }: { children: ReactNode }) => {
  return (
    <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
      {children}
    </Text>
  )
}

export default function Footer() {
  return (
    <Box bg={'white'}>
      <Container as={Stack} maxW={'6xl'} py={10} className="footer-container">
        <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={8}>
          <Stack align={'flex-start'} color={'#8789BA'} fontWeight={'normal'}>
            <ListHeader>
              <Text as="span" color={'#0F1574'} fontSize={32} fontWeight={'bolder'}>
                Strive
              </Text>
            </ListHeader>
            <Link href={'https://www.strivemath.com'} color={'#8789BA'} fontWeight={'normal'}>Home</Link>
            <Link href={'https://www.strivemath.com/about'} color={'#8789BA'} fontWeight={'normal'}>About Us</Link>
            <Link as={NextLink} href={'/other/careers/teach-at-strive'} color={'#8789BA'} fontWeight={'normal'}>Teach At Strive</Link>
            <Link href={'https://www.strivemath.com/toy'} color={'#8789BA'} fontWeight={'normal'}>Student Toy</Link>
            <Link as={NextLink} href={'/other/careers'} color={'#8789BA'} fontWeight={'normal'}>Careers</Link>
            <Link as={NextLink} href={'/other/privacy-policy'} target="_blank" color={'#8789BA'} fontWeight={'normal'}>Privacy Policy</Link>
          </Stack>

          <Stack align={'flex-start'} spacing={4}>
            <ListHeader>
              <Text as="span" color={'#0F1574'} fontSize={32} fontWeight={'bolder'}>
                Socials
              </Text>
            </ListHeader>

            <Link
              href={'https://www.linkedin.com/company/strivemath/?viewAsMember=true'}
              target="_blank"
              rel="noopener noreferrer"
              display={'flex'}
              alignItems={'center'}
              color={'#708196'}
              fontWeight={'medium'}
            >
              <FaLinkedin color={'#6f58ff'} fontSize={'20px'} />
              <Text as="span" ml={'10px'} color={'#708196'} fontWeight={'medium'}>LinkedIn</Text>
            </Link>
            <Link
              href={'https://www.facebook.com/Strivemath'}
              target="_blank"
              rel="noopener noreferrer"
              display={'flex'}
              alignItems={'center'}
              color={'#708196'}
              fontWeight={'medium'}
            >
              <FaFacebook color={'#6f58ff'} fontSize={'20px'} />
              <Text as="span" ml={'10px'} color={'#708196'} fontWeight={'medium'}>Facebook</Text>
            </Link>
            <Link
              href={'https://www.youtube.com/c/Strivemath'}
              target="_blank"
              rel="noopener noreferrer"
              display={'flex'}
              alignItems={'center'}
              color={'#708196'}
              fontWeight={'medium'}
            >
              <FaYoutube color={'#6f58ff'} fontSize={'20px'} />
              <Text as="span" ml={'10px'} color={'#708196'} fontWeight={'medium'}>YouTube</Text>
            </Link>
          </Stack>

          <Stack align={'flex-start'}>
            <ListHeader>
              <Text as="span" color={'#0F1574'} fontSize={32} fontWeight={'bolder'}>
                Contact
              </Text>
            </ListHeader>
            <Link
              href={'mailto:hello@strivemath.com'}
              display={'flex'}
              target="_top"
              color={'#8789BA'}
              fontWeight={'normal'}
            >
              <FaEnvelope color={'#6f58ff'} fontSize={'20px'} />
              <Text as="span" ml={'10px'} color={'#8789BA'} fontWeight={'normal'}>
                hello@strivemath.com
              </Text>
            </Link>
            <Link
              href={'https://api.whatsapp.com/send?phone=6597821517'}
              display={'flex'}
              target="_blank"
              color={'#8789BA'}
              fontWeight={'normal'}
            >
              <FaPhone color={'#6f58ff'} fontSize={'20px'} />
              <Text as="span" ml={'10px'} color={'#8789BA'} fontWeight={'normal'}>
                +65 9782 1517
              </Text>
            </Link>
          </Stack>

          <Stack align={'flex-start'}>
            <Image src="/images/main-logo-large.webp" alt="Strive" height={35} width={122} />
          </Stack>
        </SimpleGrid>
      </Container>

      <Box
        borderTopWidth={1}
        borderStyle={'solid'}
        borderColor={useColorModeValue('gray.200', 'gray.700')}
      >
        <Container
          as={Stack}
          maxW={'6xl'}
          py={4}
          direction={{ base: 'column', md: 'row' }}
          spacing={4}
          justify={{ md: 'space-between' }}
          align={{ md: 'center' }}
        >
          <Text>© {new Date().getFullYear()} Strive Math. All rights reserved</Text>
        </Container>
      </Box>
    </Box>
  )
}
