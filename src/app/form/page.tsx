import { Steps } from 'antd'

import styles from './page.module.css'

export default function Home() {
  const description = 'This is a description.';

  return (
    <main className={styles.main}>
      <Steps
        direction="vertical"
        size="small"
        current={1}
        items={[
          { title: 'Finished', description },
          {
            title: 'In Progress',
            description,
          },
          {
            title: 'Waiting',
            description,
          },
        ]}
      />
    </main>
  )
}
