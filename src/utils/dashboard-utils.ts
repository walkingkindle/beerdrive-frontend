export class DashboardUtils{
    public static toggleChip(el: any) {
    document.querySelectorAll('.filter-chip').forEach((e) => e.classList.remove('active'));
    el.classList.add('active');
  }
}