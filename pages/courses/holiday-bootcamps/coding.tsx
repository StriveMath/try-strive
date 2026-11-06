import HolidayBootcampsLanding from '@/components/holiday-bootcamps/HolidayBootcampsLanding'

// Share link with its own WhatsApp/social preview image; opens scrolled to the Coding Bootcamps section.
// noindex: search engines index /courses/holiday-bootcamps only.
export default function HolidayBootcampsCodingPage() {
  return <HolidayBootcampsLanding variant="coding" />
}
