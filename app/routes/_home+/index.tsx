import { type MetaFunction } from '@remix-run/node'

export const meta: MetaFunction = () => [{ title: 'Epic Notes' }]

// Tailwind Grid cell classes lookup

export default function Index() {
	return (
		<main className="font-poppins grid h-full place-items-center">
			<section className="max-w-screen-xl">
				<div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-7">
					{new Array(14).fill(undefined).map((el) => {
						return (
							<div
								key={el}
								className="group relative overflow-hidden rounded-lg border border-gray-300"
							>
								<img
									className="h-auto w-full"
									src="https://picsum.photos/200/300"
									alt=""
								/>
								<div className="overflow-hidden bg-gray-500 p-2 group-hover:overflow-auto">
									<h3 className="line-clamp-2 text-center text-sm font-medium transition-all duration-300 group-hover:line-clamp-none">
										Lorem ipsum dolor sit amet consectetur adipisicing elit.
										Nesciunt vitae qui nemo. In aperiam enim Nesciunt vitae qui
										nemo. In aperiam enim Nesciunt vitae qui nemo. In aperiam
									</h3>
								</div>
							</div>
						)
					})}
				</div>
			</section>
		</main>
	)
}
