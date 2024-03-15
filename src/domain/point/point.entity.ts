import { Entity } from 'typeorm';
import { PointDetail } from './vo/point.detail';

@Entity({ name: 'point' })
export class PointEntity {
  points: Array<PointDetail>;
  totalPoints: number;
}
