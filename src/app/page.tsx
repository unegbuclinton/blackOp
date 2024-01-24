'use client'
import Image from 'next/image'
import Button from './component/blackOpButton/Button'
import Divider from './component/divider/Divider'
import Carousel from './component/carousel/Carousel'
import { coreValues, faq, requirements, teamInfo } from '@/lib/blackOp'
import CardInfo from './component/cardInfo/CardInfo'
import Accordion from './component/accordion/Accordion'

export default function Home() {
  return (
    <main className='bg-black text-left lg:text-center px-6 max-w-[1100px] mx-auto'>
      <div className='lg:flex items-center'>
        <div className='w-[65%]'>
          <h2 className=' max-w-[510px] text-left lg:text-[40px] mb-16 lg:mb-6 font-semibold lg:leading-[1.4]'>
            Top African Operators building great companies around the world
          </h2>
          <Button className='hidden lg:block' type='button'>
            Join Community
          </Button>
        </div>
        <Image
          height={310}
          width={460}
          className='w-[331px] h-[214px] lg:h-[336px] lg:w-[503px] rounded-lg mb-16 object-cover'
          src='https://blackops.community/wp-content/uploads/2021/03/IMG_7403-scaled.jpg'
          alt='blackop-image'
        />
        <Button className='lg:hidden' type='button'>
          Join Community
        </Button>
      </div>
      <Divider />
      <div className='max-w-[900px] mx-auto'>
        <h2 className=' mb-10 font-semibold'>Who we are</h2>
        <p>
          Black Ops is an invitation-only community built exclusively for
          African operators, to support our collective journey building and
          scaling great companies.
        </p>
        <p className='py-4'>
          Scaling a company is hard. Whether you’re in Operations, People,
          Finance, Growth, Customer Success or other functions, we believe we
          can go farther together.
        </p>
        <p>
          Our members are tasked with figuring out how to execute their
          company’s strategy to deliver great results. We share knowledge and
          best practices, help each other think through problems, and provide a
          safe space for honesty and vulnerability.
        </p>
      </div>
      <Divider />
      <h2 className=' mb-10 font-semibold'>- Welcome to Black Ops -</h2>
      <Carousel carouselSlides={teamInfo} />
      <Divider />
      <p>
        Our members are operators in the management, leadership and executive
        teams within high growth, venture backed companies, at the CxO, VP,
        Director, General/Country Manager and Senior Manager levels.
      </p>
      <p className='my-6 font-semibold'>Our membership requirements are:</p>
      <ul>
        {requirements?.map(({ text }, index) => (
          <li className='text-white mb-4 list-disc ml-5 lg:text-xl' key={index}>
            {text}
          </li>
        ))}
      </ul>
      <Divider />
      <h2 className=' mb-10 font-semibold'>What we do</h2>
      <p>
        We are addressing the scarcity of support systems targeted at African
        operators who are critical in scaling startups, operating businesses,
        and building great companies that last.
      </p>
      <p className='my-4 lg:mb-8'>
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
      <Divider />
      <div className='mb-8 max-w-[750px]'>
        {faq.map(({ answer, question }, index) => (
          <Accordion key={index} answer={answer} question={question} />
        ))}
      </div>
    </main>
  )
}
