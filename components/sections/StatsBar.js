'use client';

import styles from './StatsBar.module.css';
import AnimatedCounter from '@/components/ui/AnimatedCounter';
import { stats } from '@/data/stats';

export default function StatsBar() {
  return (
    <section className={styles.statsBar}>
      <div className={styles.container}>
        {stats.map((stat) => (
          <div key={stat.id} className={styles.statItem}>
            <div className={styles.statValue}>
              <AnimatedCounter value={stat.value} suffix={stat.suffix} />
            </div>
            <div className={styles.statLabel}>{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
