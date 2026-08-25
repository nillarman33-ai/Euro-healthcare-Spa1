import { useEffect, useState } from 'react';
import {
  Check,
  ChevronLeft,
  ChevronRight,
  MessageCircle,
  Sparkles,
  User,
  X,
} from 'lucide-react';
import { services, timeSlots, type Service } from '@/lib/data';

type BookingModalProps = {
  open: boolean;
  onClose: () => void;
  preselected?: Service | null;
};

const steps = ['Service', 'Date & Time', 'Details'] as const;

function formatPrice(value: number) {
  return `৳ ${value.toLocaleString('en-US')}`;
}

export function BookingModal({ open, onClose, preselected }: BookingModalProps) {
  const [step, setStep] = useState(0);
  const [service, setService] = useState<Service | null>(null);
  const [durationIndex, setDurationIndex] = useState(0);
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [fullName, setFullName] = useState('');
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (open) {
      setStep(preselected ? 1 : 0);
      setService(preselected ?? null);
      setDurationIndex(0);
      setDone(false);
    }
  }, [open, preselected]);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  if (!open) return null;

  const selectedOption = service ? service.options[durationIndex] : null;

  const canNext = () => {
    if (step === 0) return service !== null;
    if (step === 1) return date !== '' && time !== '';
    return true;
  };

  const handleWhatsApp = () => {
    if (!service || !selectedOption) return;
    const message =
      `Hello! I would like to book a spa appointment.%0A%0A` +
      `Name: ${fullName || 'Not provided'}%0A` +
      `Service: ${service.name}%0A` +
      `Duration: ${selectedOption.duration}%0A` +
      `Date & Time: ${date} at ${time}%0A` +
      `Estimated Total: ${formatPrice(selectedOption.price)}`;
    window.open(`https://wa.me/8801913369493?text=${message}`, '_blank');
    setDone(true);
  };

  const reset = () => {
    setStep(0);
    setService(null);
    setDurationIndex(0);
    setDate('');
    setTime('');
    setFullName('');
    setDone(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[70] flex items-end justify-center bg-navy/70 backdrop-blur-sm sm:items-center" onClick={reset}>
      <div
        className="relative max-h-[92vh] w-full max-w-3xl overflow-y-auto rounded-t-3xl bg-panel shadow-2xl sm:rounded-3xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="sticky top-0 z-10 flex items-center justify-between border-b border-navy/10 bg-panel/95 px-6 py-5 backdrop-blur-md">
          <div>
            <span className="eyebrow text-gold">Reservation</span>
            <h3 className="mt-1 font-headline text-xl font-light text-navy">
              {done ? 'Booking Confirmed' : 'Book Your Escape'}
            </h3>
          </div>
          <button
            onClick={reset}
            className="grid h-10 w-10 place-items-center rounded-full text-navy/60 transition hover:bg-navy/5 hover:text-navy"
            aria-label="Close"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {done ? (
          <div className="px-6 py-16 text-center">
            <div className="mx-auto grid h-20 w-20 place-items-center rounded-full bg-gold/15 text-gold">
              <Check className="h-10 w-10" />
            </div>
            <h4 className="mt-6 font-headline text-2xl font-light text-navy">
              Thank you, {fullName.split(' ')[0] || 'guest'}.
            </h4>
            <p className="mx-auto mt-3 max-w-md text-sm text-navy/65">
              Your reservation for <span className="font-medium text-navy">{service?.name}</span> on{' '}
              <span className="font-medium text-navy">{date}</span> at{' '}
              <span className="font-medium text-navy">{time}</span> has been sent via WhatsApp. Our
              concierge will confirm your booking shortly.
            </p>
            <div className="mx-auto mt-6 max-w-sm rounded-2xl border border-navy/10 bg-white p-5 text-left text-sm text-navy/70">
              <div className="flex justify-between py-1">
                <span>Duration</span>
                <span className="font-medium text-navy">{selectedOption?.duration}</span>
              </div>
              <div className="flex justify-between py-1">
                <span>Estimated total</span>
                <span className="font-medium text-gold">{selectedOption ? formatPrice(selectedOption.price) : '-'}</span>
              </div>
            </div>
            <button onClick={reset} className="btn-gold mt-8">
              Done
            </button>
          </div>
        ) : (
          <div className="px-6 py-6">
            {/* Stepper */}
            <div className="mb-8 flex items-center">
              {steps.map((s, i) => (
                <div key={s} className="flex flex-1 items-center last:flex-none">
                  <div className="flex items-center gap-2">
                    <span
                      className={`grid h-8 w-8 place-items-center rounded-full text-xs font-medium transition-all ${
                        i < step
                          ? 'bg-gold text-navy'
                          : i === step
                            ? 'bg-navy text-white'
                            : 'bg-navy/10 text-navy/40'
                      }`}
                    >
                      {i < step ? <Check className="h-4 w-4" /> : i + 1}
                    </span>
                    <span
                      className={`hidden text-xs font-medium uppercase tracking-wide sm:block ${
                        i === step ? 'text-navy' : 'text-navy/40'
                      }`}
                    >
                      {s}
                    </span>
                  </div>
                  {i < steps.length - 1 && (
                    <div
                      className={`mx-2 h-px flex-1 transition-all ${
                        i < step ? 'bg-gold' : 'bg-navy/10'
                      }`}
                    />
                  )}
                </div>
              ))}
            </div>

            {/* Step 0: Service */}
            {step === 0 && (
              <div className="grid max-h-[55vh] gap-3 overflow-y-auto pr-1 sm:grid-cols-2">
                {services.map((s) => {
                  const isSelected = service?.id === s.id;
                  const selIdx = isSelected ? durationIndex : 0;
                  const selOpt = s.options[selIdx];
                  return (
                    <div
                      key={s.id}
                      onClick={() => {
                        setService(s);
                        setDurationIndex(0);
                      }}
                      className={`cursor-pointer rounded-xl border p-3 transition-all ${
                        isSelected
                          ? 'border-gold bg-gold/10'
                          : 'border-navy/10 bg-white hover:border-gold/40'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <img src={s.image} alt={s.name} className="h-16 w-16 rounded-lg object-cover" />
                        <div className="min-w-0 flex-1">
                          <p className="truncate font-headline text-sm font-medium text-navy">{s.name}</p>
                          <p className="mt-0.5 text-sm font-medium text-gold">
                            {formatPrice(selOpt.price)}
                          </p>
                        </div>
                      </div>
                      <div className="mt-3 flex gap-1.5" onClick={(e) => e.stopPropagation()}>
                        {s.options.map((opt, oi) => (
                          <button
                            key={opt.duration}
                            onClick={() => {
                              setService(s);
                              setDurationIndex(oi);
                            }}
                            className={`flex-1 rounded-lg border px-1 py-1.5 text-[11px] font-medium transition-all ${
                              isSelected && oi === durationIndex
                                ? 'border-navy bg-navy text-white'
                                : 'border-navy/15 text-navy/70 hover:border-gold hover:text-gold'
                            }`}
                          >
                            {opt.duration}
                          </button>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            )}

            {/* Step 1: Date & Time */}
            {step === 1 && (
              <div className="space-y-6">
                <div>
                  <label className="mb-2 block text-xs font-medium uppercase tracking-wide text-navy/60">
                    Preferred date
                  </label>
                  <input
                    type="date"
                    value={date}
                    min={new Date().toISOString().split('T')[0]}
                    onChange={(e) => setDate(e.target.value)}
                    className="input-luxe"
                  />
                </div>
                <div>
                  <label className="mb-2 block text-xs font-medium uppercase tracking-wide text-navy/60">
                    Preferred time
                  </label>
                  <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
                    {timeSlots.map((t) => (
                      <button
                        key={t}
                        onClick={() => setTime(t)}
                        className={`rounded-xl border px-3 py-3 text-sm font-medium transition-all ${
                          time === t
                            ? 'border-navy bg-navy text-white'
                            : 'border-navy/10 bg-white text-navy/70 hover:border-gold hover:text-gold'
                        }`}
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                  {date && time && (
                    <p className="mt-3 flex items-center gap-2 text-xs text-gold-700">
                      <Sparkles className="h-3.5 w-3.5" />
                      Availability confirmed for {date} at {time}.
                    </p>
                  )}
                </div>
              </div>
            )}

            {/* Step 2: Details */}
            {step === 2 && (
              <div className="space-y-4">
                <div>
                  <label className="mb-1.5 block text-xs font-medium uppercase tracking-wide text-navy/60">
                    Your name
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-navy/40" />
                    <input
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className="input-luxe pl-9"
                      placeholder="Your name"
                    />
                  </div>
                </div>

                {/* Summary */}
                <div className="rounded-2xl border border-navy/10 bg-white p-5 text-sm">
                  <p className="text-xs font-medium uppercase tracking-luxe text-gold">Summary</p>
                  <div className="mt-3 space-y-1.5 text-navy/70">
                    <div className="flex justify-between">
                      <span>Service</span>
                      <span className="font-medium text-navy">{service?.name}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Duration</span>
                      <span className="font-medium text-navy">{selectedOption?.duration}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Date & time</span>
                      <span className="font-medium text-navy">
                        {date} - {time}
                      </span>
                    </div>
                    <div className="flex justify-between border-t border-navy/10 pt-2">
                      <span>Estimated total</span>
                      <span className="font-medium text-gold">
                        {selectedOption ? formatPrice(selectedOption.price) : '-'}
                      </span>
                    </div>
                  </div>
                </div>

              </div>
            )}

            {/* Footer nav */}
            <div className="mt-8 flex items-center justify-between">
              <button
                onClick={() => (step === 0 ? reset() : setStep((s) => s - 1))}
                className="inline-flex items-center gap-1.5 text-sm font-medium text-navy/60 transition hover:text-navy"
              >
                <ChevronLeft className="h-4 w-4" />
                {step === 0 ? 'Cancel' : 'Back'}
              </button>
              {step < 2 ? (
                <button
                  disabled={!canNext()}
                  onClick={() => setStep((s) => s + 1)}
                  className="btn-gold disabled:cursor-not-allowed disabled:opacity-40"
                >
                  Continue
                  <ChevronRight className="h-4 w-4" />
                </button>
              ) : (
                <button
                  disabled={!fullName}
                  onClick={handleWhatsApp}
                  className="btn-gold disabled:cursor-not-allowed disabled:opacity-40"
                >
                  <MessageCircle className="h-4 w-4" />
                  Book via WhatsApp
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
