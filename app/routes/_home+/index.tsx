import { type MetaFunction } from '@remix-run/node'
import { Link } from '@remix-run/react'

export const meta: MetaFunction = () => [{ title: 'Epic Notes' }]

// Tailwind Grid cell classes lookup
const test = [
	{
		src: 'https://picsum.photos/200/300',
		title: 'This is a very long title that will be truncated',
	},
	{
		src: 'https://picsum.photos/200/300',
		title: 'Another long title that will be truncated on hover',
	},
	{ src: 'image3.jpg', title: 'Short title' },
	// Add more images as needed
]

const images = [
	{
		src: 'https://picsum.photos/200/300',
		title:
			'This is a very long title that will be truncated dsdsd sdsdsd sdsds dsdsdsd sdsd sdsds dsd s ds ds d sdsd s d',
	},
	{
		src: 'https://picsum.photos/200/300',
		title: 'Another long title that will be truncated on hover',
	},
	{ src: 'image3.jpg', title: 'Short title' },
	...test,
	...test,
	...test,
	// Add more images as needed
]

export default function Index() {
	return (
		<main className="font-poppins grid h-full place-items-center">
			<section className="max-w-screen-xl">
				<div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-7">
					{images.map((image, index) => (
						<div
							key={index}
							className="group relative overflow-hidden rounded-lg border border-gray-300"
						>
							<img
								src={image.src}
								alt={image.title}
								className="h-auto w-full"
							/>
							<div className="absolute bottom-0 left-0 right-0 bg-gray-500 p-2">
								<h3 className="line-clamp-2 max-h-[3rem] overflow-hidden text-center text-sm font-medium transition-all duration-300 group-hover:line-clamp-none group-hover:max-h-none group-hover:bg-opacity-90">
									{image.title}
								</h3>
							</div>
						</div>
					))}
				</div>
			</section>
		</main>
	)
}
