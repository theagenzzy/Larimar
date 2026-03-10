'use client';

import styles from './StatsBar.module.css';
import AnimatedCounter from '@/components/ui/AnimatedCounter';
import { stats } from '@/data/stats';
import { useLanguage } from '@/contexts/LanguageContext';

const statLabelKeys = [
  'stats.plannedHomes',
  'stats.greenAreas',
  'stats.artificialBeach',
  'stats.golfCourse',
];

export default function StatsBar() {
  const { t } = useLanguage();

  return (
    <section className={styles.statsBar}>
      <div className={styles.container}>
        {stats.map((stat, index) => (
          <div key={stat.id} className={styles.statItem}>
            <div className={styles.statValue}>
              <AnimatedCounter value={stat.value} suffix={stat.suffix} />
            </div>
            <div className={styles.statLabel}>{t(statLabelKeys[index])}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
