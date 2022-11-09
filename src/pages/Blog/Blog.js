import { Accordion } from 'flowbite-react';
import React from 'react';
import useTitle from '../../hooks/useTitle';

const Blog = () => {
    useTitle('Blog');
    return (
        <Accordion className='my-16 lg:w-3/4 lg:mx-auto'>
            <Accordion.Panel>
                <Accordion.Title>
                    <p className='text-black font-semibold text-lg'>What are the differences between SQL and NoSQL database?</p>
                </Accordion.Title>
                <Accordion.Content>
                    <div>
                        <p className='text-lg font-semibold'>SQL</p>
                        <ul className='list-disc ml-7'>
                            <li>Relational database management system (RDBMS)</li>
                            <li>These databases have fixed or static or predefined schema.</li>
                            <li>These databases are not suited for hierarchical data storage.</li>
                            <li>These databases are best suited for complex queries.</li>
                            <li>Vertically Scalable</li>
                            <li>Follows ACID property</li>
                            <li>Examples: MySQL, PostgreSQL, Oracle, MS-SQL Server etc.</li>
                        </ul>
                    </div>
                    <div className='mt-3'>
                        <p className='text-lg font-semibold'>NoSQL</p>
                        <ul className='list-disc ml-7'>
                            <li>Non-relational or distributed database system.</li>
                            <li>They have dynamic schema</li>
                            <li>These databases are best suited for hierarchical data storage.</li>
                            <li>These databases are not so good for complex queries</li>
                            <li>Horizontally scalable</li>
                            <li>Follows CAP(consistency, availability, partition tolerance)</li>
                            <li>Examples: MongoDB, GraphQL, HBase, Neo4j, Cassandra etc.</li>
                        </ul>
                    </div>
                </Accordion.Content>
            </Accordion.Panel>
            <Accordion.Panel>
                <Accordion.Title>
                    <p className='text-black font-semibold text-lg'>What is JWT, and how it works?</p>
                </Accordion.Title>
                <Accordion.Content>
                    <p>JSON Web Token is a proposed Internet standard for creating data with optional signature and/or optional encryption whose payload holds JSON that asserts some number of claims. The tokens are signed either using a private secret or a public/private key.</p>
                    <br />
                    <p>User sign-in using username and password or google/facebook.
                        Authentication server verifies the credentials and issues a jwt signed using either a secret salt or a private key.
                        User's Client uses the JWT to access protected resources by passing the JWT in HTTP Authorization header.
                        Resource server then verifies the authenticity of the token using the secret salt/ public key.</p>
                </Accordion.Content>
            </Accordion.Panel>
            <Accordion.Panel>
                <Accordion.Title>
                    <p className='text-black font-semibold text-lg'>What are the differences between JavaScript and NodeJs?</p>
                </Accordion.Title>
                <Accordion.Content>
                    <div>
                        <p className='text-lg font-semibold'>JavaScript</p>
                        <ul className='list-disc ml-7'>
                            <li>It is an accessible, bridge, parsed, lightweight, reactive, and web apps programming language.</li>
                            <li>It's a programming language, after all. Any browser with a competent browser engine will operate.</li>
                            <li>It's most commonly used on client-side servers.</li>
                            <li>The node community does not care about JavaScript.</li>
                            <li>It's made for creating network-centric apps.</li>
                            <li>It's a new release of the ECMA script that works on the C++-based V8 engine.</li>
                            <li>TypedJS, RamdaJS, and other JavaScript frameworks are examples.</li>
                        </ul>
                    </div>
                    <div className='mt-3'>
                        <p className='text-lg font-semibold'>NodeJs</p>
                        <ul className='list-disc ml-7'>
                            <li>It's a bridge, open-source Js runtime environment for executing Js on the server.</li>
                            <li>It's a JavaScript translator and environment that includes some valuable libraries for JavaScript programming.</li>
                            <li>It's mainly popular on the server-side.</li>
                            <li>All node projects represent the JavaScript community.</li>
                            <li>It's made for real-time data-intensive apps that run on multiple platforms.</li>
                            <li>C++, C, and JavaScript are used.</li>
                            <li>Nodejs modules include Lodash and Express. All of these modules must be imported from npm.</li>
                        </ul>
                    </div>
                </Accordion.Content>
            </Accordion.Panel>
            <Accordion.Panel>
                <Accordion.Title>
                    <p className='text-black font-semibold text-lg'>How does NodeJS handle multiple requests at the same time?</p>
                </Accordion.Title>
                <Accordion.Content>
                    <p>Node js is an open-source virtual machine that uses javascript as its scripting language. Despite being single-threaded, it is one of the most popular web technologies. The reason why node js is popular despite being single-threaded is the asynchronous nature that makes it possible to handle concurrency and perform multiple I/O operations at the same time. Node js uses an event loop to maintain concurrency and perform non-blocking I/O operations.</p>
                    <br />
                    <p>As soon as Node js starts, it initializes an event loop. The event loop works on a queue (which is called an event queue) and performs tasks in FIFO(First In First Out) order. It executes a task only when there is no ongoing task in the call stack. The call stack works in LIFO(Last In First Out) order. The event loop continuously checks the call stack to check if there is any task that needs to be run. Now whenever the event loop finds any function, it adds it to the stack and runs in order.  </p>
                </Accordion.Content>
            </Accordion.Panel>
        </Accordion>
    );
};

export default Blog;