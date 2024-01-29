'use client'
import Image from 'next/image'
import Button from './component/blackOpButton/Button'
import Divider from './component/divider/Divider'
import Carousel from './component/carousel/Carousel'
import {
  coreValues,
  faq,
  feedback,
  partners,
  requirements,
  teamInfo,
} from '@/lib/blackOp'
import CardInfo from './component/cardInfo/CardInfo'
import Accordion from './component/accordion/Accordion'
import ScrollToTopButton from './component/scrollToTop/ScrollToTop'
import Link from 'next/link'

export default function Home() {
  return (
    <main className='bg-black px-4 lg:px-20'>
      <div className='lg:flex items-center'>
        <div className='lg:w-[65%]'>
          <h2 className=' max-w-[510px] text-left lg:text-[40px] mb-8 lg:mb-6 font-semibold lg:leading-[1.4]'>
            Top African Operators <span>building great companies</span> around
            the world
          </h2>
          <p className='mb-6'>
            Scaling a company is hard. Whether you’re in Operations, People,
            Finance, Growth, Customer Success or other operator functions, we
            believe we can go farther together.
          </p>
          <Link href={'/community'}>
            <Button className='hidden lg:block' type='button'>
              Join Community
            </Button>
          </Link>
        </div>
        <Image
          height={310}
          width={460}
          className='w-full h-[214px] lg:h-[336px] lg:w-[503px] rounded-lg mb-16 object-cover'
          src='/blackHero.jpg'
          alt='blackop-image'
        />
        <Link href={'/community'}>
          <Button className='lg:hidden' type='button'>
            Join Community
          </Button>
        </Link>
      </div>
      <Divider />
      <div className='hero-img w-full text-left'>
        <div className='lg:w-[60%] lg:pl-12 lg:pb-12'>
          <h2>
            What is <span>Black Ops??</span>
          </h2>
          <p className='my-10'>
            Black Ops is an invitation-only community built exclusively for
            African operators, to support our collective journey building and
            scaling great companies.
          </p>
          <Button type='button'>Find out more</Button>
        </div>
      </div>
      <Divider />
      <h2 className=' mb-16 text-center font-semibold'>
        View our <span>communities</span>
      </h2>
      <div className='flex flex-wrap justify-center items-center gap-6 mb-20'>
        <div className='w-full lg:w-1/2'>
          <h2 className='max-w-[400px] font-bold'>
            Black Ops<span> Prime Club</span>
          </h2>
          <p className='my-4'>
            The &apos;Experienced Operators&apos; community focused on tenured
            operators with significant experience leading teams, departments and
            entire organizations, driving value for businesses.
          </p>
          <div className='flex gap-6'>
            <Link href={'/community'}>
              <Button className='lg:hidden' type='button'>
                Join Community
              </Button>
            </Link>
          </div>
        </div>
        <Image
          alt='programme image'
          height={250}
          width={350}
          className='w-[364px] h-[420px]  border-2 border-solid border-secondary object-cover'
          src={'/community1.jpg'}
        />
      </div>
      <div className='flex flex-wrap flex-row-reverse justify-center items-center gap-6'>
        <div className='lg:w-1/2'>
          <h2 className='max-w-[400px] font-bold'>
            Black Ops <span>Catalyst</span>
          </h2>
          <p className='my-4'>
            A community supporting entry and mid-level operators in the African
            tech ecosystem. Overcome career challenges with us as your catalyst
            for growth and success.
          </p>
          <div className='flex gap-6'>
            <Button type='button'>Register</Button>
            <Link href={'/catalyst'}>
              <Button secondary type='button'>
                Learn more
              </Button>
            </Link>
          </div>
        </div>
        <Image
          alt='programme image'
          height={250}
          width={350}
          className='w-[364px] h-[420px]  border-2 border-solid border-secondary object-cover'
          src={'/catalyst1.jpg'}
        />
      </div>
      <Divider />
      <div className='mb-20 lg:mb-28'>
        <h2 className='text-center font-bold mb-10'>
          What we’re <span>up to</span>
        </h2>
        <div className='max-w-[500px]'>
          <h2 className='font-bold mb-8'>
            Why <span>BlackOp</span>?
          </h2>
          <p className='mb-12'>
            We are addressing the scarcity of support systems for African
            operators who are critical in scaling startups, operating
            businesses, and building great companies that last.
          </p>
        </div>
        <p className='my-4 lg:mb-8 font-semibold'>
          Our community is built around three pillars:
        </p>
        <div className='flex flex-col lg:flex-row gap-3'>
          {coreValues?.map(({ iconName, subTitle, title }, index) => (
            <CardInfo
              key={index}
              icon={iconName}
              subtitle={subTitle}
              title={title}
            />
          ))}
        </div>
      </div>
      <div>
        <h2 className='font-bold mb-8'>
          Our <span>Misson</span>?
        </h2>
        <p className='mb-12 max-w-[650px]'>
          To build the most valuable network and resources for African operators
          supporting founders to build high growth companies.
        </p>
        <Button type='button'>Find out more</Button>
      </div>
      <div className='flex flex-wrap mt-12'>
        <div className='p-6 border flex-1 border-secondary border-solid'>
          <p className='text-[48px]'> 2k+</p>
          <p className='text-base'> Operator network</p>
        </div>
        <div className='p-6 border flex-1 border-secondary border-solid'>
          <p className='text-[48px]'> 1080+</p>
          <p className='text-base'>Mins of virtual firesides & masterclasses</p>
        </div>
        <div className='p-6 border flex-1 border-secondary border-solid'>
          <p className='text-[48px]'> 15+</p>
          <p className='text-base'> Partners</p>
        </div>
      </div>
      <Divider />
      <h2 className='mb-8 font-bold'>
        A few <span>partners</span> we work with
      </h2>
      <p className='mb-8 max-w-[550px]'>
        We harness the support of our partners to empower operators in the
        African tech community, fostering an environment of growth and success.
        Together, we build bridges for professional development
        across the ecosystem.
      </p>
      <Button type='button'>Become an expert</Button>
      <div className='flex flex-wrap gap-6 my-8 justify-center'>
        {partners?.map(({ img }, index) => (
          <Image
            height={100}
            width={100}
            className=''
            key={index}
            alt=''
            src={img}
          />
        ))}
      </div>
      <Divider />
      <div className='mb-10 lg:mb-28'>
        <h2 className='text-center font-bold'>
          View our <span>social proofs</span>
        </h2>
        <h2 className='my-8 font-bold'>
          What <span>our members</span> are saying
        </h2>
        <p className='max-w-[550px]'>
          Don&apos;t take our words for it, see what our members have to say
          about their experiences with Black Ops.
        </p>
      </div>
      <div className='flex flex-col lg:flex-row gap-4 text-grey'>
        {feedback?.map(({ feedbackText, name, role, img }, index) => (
          <div
            key={index}
            className='lg:max-w-[33%] mb-4 border-grey/20 border border-solid p-2 rounded-md'
          >
            <p className='mb-6'>{feedbackText}</p>
            <div className='flex gap-4'>
              <Image
                alt='member image'
                src={img}
                height={100}
                width={100}
                className='h-12 w-12 rounded-full object-cover'
              />
              <div>
                <p className='text-secondary/45'>{name}</p>
                <p>{role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Divider />
      <div>
        <h2 className='text-center mb-12 font-bold'>
          Work with <span>us</span>
        </h2>
        <div className='flex flex-wrap justify-center items-center gap-6'>
          <div className='lg:w-1/2'>
            <h2 className='max-w-[400px] font-bold'>
              <span>Hire</span> from Black Ops
            </h2>
            <p className='my-4'>
              Hire top operators with valuable experience to drive your
              organization towards its goals efficiently. Whatever your company
              aims to achieve, save time by tapping into our pool of skilled
              professionals aligned with your objectives.
            </p>
            <div className='flex gap-6'>
              <Button type='button'>Hire Top Operators</Button>
            </div>
          </div>
          <Image
            alt='programme image'
            height={250}
            width={350}
            className='w-[540px] h-[360px] object-cover border-2 border-solid border-secondary'
            src={'/hireImg.jpg'}
          />
        </div>
        <Divider />
        <div className='flex flex-wrap flex-row-reverse justify-center items-center gap-6'>
          <div className='lg:w-1/2'>
            <h2 className='max-w-[400px] font-bold'>
              Join our <span>network</span>
            </h2>
            <p className='my-4'>
              Join our network to stay informed about the latest programs, job
              opportunities, and events. Be at the forefront of opportunities.
            </p>
            <div className='flex'>
              <input
                type='text'
                placeholder='Enter email address'
                className='outline-none rounded-l-md rounded-r-none border-solid border border-grey border-l-none text-white bg-black px-4 text-base'
              />
              <Button
                secondary
                className='rounded-r-md bg-secondary text-white rounded-l-none'
                type='button'
              >
                Join the network
              </Button>
            </div>
          </div>
          <Image
            alt='programme image'
            height={250}
            width={350}
            className='border-2 h-[430px] w-[450px] object-cover border-solid border-secondary'
            src={'/community2.jpg'}
          />
        </div>
      </div>

      <ScrollToTopButton />
    </main>
  )
}
