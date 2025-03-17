
import React from 'react';
import { CardHoverEffect } from '@/components/ui/card-hover-effect';
import { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface StatCardProps {
  title: string;
  value: string | number;
  icon: LucideIcon;
  description?: string;
  change?: number;
  changeDirection?: 'up' | 'down';
  className?: string;
  iconClassName?: string;
}

const StatCard = ({
  title,
  value,
  icon: Icon,
  description,
  change,
  changeDirection = 'up',
  className,
  iconClassName,
}: StatCardProps) => {
  return (
    <CardHoverEffect className={cn("overflow-hidden", className)}>
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-sm font-medium text-gray-500 mb-1">{title}</h3>
          <p className="text-2xl font-bold text-gray-900">{value}</p>
          
          {description && (
            <p className="text-sm text-gray-500 mt-1">{description}</p>
          )}
          
          {typeof change !== 'undefined' && (
            <div className="mt-1 flex items-center">
              <span
                className={cn(
                  "text-xs font-medium mr-1",
                  changeDirection === 'up' ? 'text-green-600' : 'text-red-600'
                )}
              >
                {changeDirection === 'up' ? '+' : '-'}{Math.abs(change)}%
              </span>
              <span className="text-xs text-gray-500">vs. last week</span>
            </div>
          )}
        </div>
        
        <div className={cn(
          "p-2 rounded-lg",
          iconClassName || "bg-primary/10"
        )}>
          <Icon className="h-5 w-5 text-primary" />
        </div>
      </div>
    </CardHoverEffect>
  );
};

export default StatCard;
