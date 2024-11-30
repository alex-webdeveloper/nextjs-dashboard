import { cacheFn } from '@/app/lib/utils';


export default function Page() {

	return (
		<>
			<p>Check Page</p>
			<p>{cacheFn('hello from cache')}</p>
			<hr/>
			<Comp/>
		</>
	);
}

function Comp() {
	return (
		<>
			<p>Component</p>
			<p>{cacheFn('hello from')}</p>
			
		</>
	);

}